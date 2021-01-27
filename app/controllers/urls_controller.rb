class UrlsController < ApplicationController
  before_action :set_url, only: [:show, :update]
  def index
    @urls = Url.order("pinned DESC, created_at DESC")
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
    @url.click_count = @url.click_count + 1
    if @url.save
      render status: :ok, json: { notice: "successfully redirected", url: @url}
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages }
    end
  end

  def update
    @url.toggle!(:pinned)
    if @url.save
      render status: :ok, json: { notice: "pin updated successfully", url: @url}
    else
      render status: :unprocessable_entity, json: { errors: @url.errors.full_messages}
    end
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
