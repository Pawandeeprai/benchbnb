class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    render :json
  end

  def bench_params
    params.require(:bench).permit(:lat, :long)
  end
end
