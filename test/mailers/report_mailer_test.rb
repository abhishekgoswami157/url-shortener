require 'test_helper'

class ReportMailerTest < ActionMailer::TestCase
  test "report_mailer" do
    mail = ReportMailer.report_mailer
    assert_equal "Report mailer", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
