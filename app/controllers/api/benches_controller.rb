class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
  end

  def create
    render :json
  end
end
