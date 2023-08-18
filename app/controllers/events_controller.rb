class EventsController < ApplicationController
  def index
    @events = Event.all
    current_month = params[:start_date] ? Date.parse(params[:start_date]).month : Date.today.month
    @monthly_events = @events.select { |event| event.date_range.any? { |date| date.month == current_month } }

    build_events_json if params[:date]
  end

  def new
    @event = Event.new
    @event.build_frequency
  end

  def create
    @event = Event.new(event_params)
    @event.series_id = generate_unique_id

    if @event.save
      generate_recurring_events
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)

    if @event.save
      redirect_to root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    redirect_to root_path, status: :see_other
  end

  private

  def generate_recurring_events
    return unless @event.recurring?

    case @event.frequency.period
    when "Weekly"
      set_dates_recurring_events(8, 7.days)
    when "Monthly"
      set_dates_recurring_events(12, 1.month)
    when "Yearly"
      set_dates_recurring_events(5, 1.year)
    end
  end

  def set_dates_recurring_events(num, incrementation)
    start_date = @event.start_date
    end_date = @event.end_date
    num.times do
      new_start_date = start_date + incrementation
      new_end_date = end_date + incrementation
      create_recurring_event(new_start_date, new_end_date)
      start_date = new_start_date
      end_date = new_end_date
    end
  end

  def create_recurring_event(new_start_date, new_end_date)
    Event.create(
      title: @event.title,
      description: @event.description,
      start_date: new_start_date,
      end_date: new_end_date,
      series_id: @event.series_id
    )
  end

  def generate_unique_id
    "NUM-#{Time.current.to_i}"
  end

  def build_events_json
    full_date = Date.parse(params[:date])
    @events = @events.select { |event| event.date_range.include?(full_date) }
    @monthly_events = Event.all.select { |event| event.date_range.any? { |date| date.month == full_date.month } }
    render json: {
      events: @events,
      monthly: @monthly_events
    }
  end

  def event_params
    params.require(:event).permit(:title,
                                  :description,
                                  :start_date,
                                  :end_date,
                                  :recurring,
                                  frequency_attributes: [:id, :period])
  end
end
