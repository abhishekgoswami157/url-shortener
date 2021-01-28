class ReportsController < ApplicationController

  def new
  end

  def create
    @email = params[:report][:email]
    if @email
      ReportMailer.generate_report(@email).deliver_now
      render json: {notice: "Email successfully sent "}
    else
      render status: :unprocessable_entity, json: {notice: "Something went wrong"}
    end
  end

end
