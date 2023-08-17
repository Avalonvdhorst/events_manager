class EventsController < ApplicationController
  def index
    @events = Event.all
    if params[:date]
      @events = Event.first
      render json: @events
    end
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

  private

  def event_params
    params.require(:event).permit(:title, :description, :start_date, :end_date)
  end
end
