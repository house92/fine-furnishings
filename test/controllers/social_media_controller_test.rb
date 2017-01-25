require 'test_helper'

class SocialMediaControllerTest < ActionDispatch::IntegrationTest
  test "should get github" do
    get social_media_github_url
    assert_response :success
  end

end
