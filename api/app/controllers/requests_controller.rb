class RequestsController < ApplicationController
  before_action :set_request, only: %i[ show update destroy ]

  # GET /requests
  def index
    @requests = Request.all
    render json: @requests, status: :ok
  end

  # GET /requests/1
  def show
    render json: @request, status: :ok
  end

  # POST /requests
  def create
    request = Request.new(request_params)
    if request.save
      render json: request, status: :created
    else
      render json: {message: "Can't be processed"}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /requests/1
  def request_state
    request= Request.find(params[:id])
    if request
      request.update(request_params)
      render json: request
    else
      render json: {message: "State not found"}, status: :unprocessable_entity
    end
  end

  # DELETE /requests/1
  def destroy
    @request.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_request
      @request = Request.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def request_params
      params.permit(:product, :quantity, :state, :supplier)
    end
end
