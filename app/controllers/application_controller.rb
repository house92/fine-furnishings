class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  def components
    render json: Dir[Rails.root.join('app/assets/javascripts/components/*.jsx')].map do |path|
      path.match(/(\w+).jsx/)
      $1
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :provider, :uid])
  end
end
