class ReportMailer < ApplicationMailer
  def generate_report(email)
    @urls = Url.order("pinned DESC, created_at DESC")
    mail to: email, subject: "URL Shortner app report."
  end
end