class EventsController < ApplicationController
  def index
    @events = Event.all
    current_month = params[:start_date] ? Date.parse(params[:start_date]).month : Date.today.month
    @monthly_events = @events.select { |event| event.date_range.any? { |date| date.month == current_month } }

    build_events_json if params[:date]
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)

    if @event.save
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
    params.require(:event).permit(:title, :description, :start_date, :end_date)
  end
end
