class UrlsController < ApplicationController
  before_action :set_url, only: [:show]
  def index
    @urls = Url.all
    render status: :ok, json: {urls: @urls}
  end

  def create
    @url = Url.new(url_params)
    @url.set_slug
    if @url.save
      render status: :ok, json: {notice: "url shortened successfully!!", url: @url}
    else
      render status: :unprocessable_entity, json: {errors: @url.errors.full_messages}
    end
  end

  def show
    render status: :ok, json: { notice: "successfully redirected", url: @url}
  end


  private
  def url_params
    params.require(:url).permit(:original_url)
  end

  def set_url
    @url = Url.find_by(slug: params[:id])
    unless @url
      render status: :unprocessable_entity, json: { errors: @ur.errors.full_messages}
    end
  end
end
