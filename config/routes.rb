Rails.application.routes.draw do
  root to: 'pages#home'
  
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  scope :auth do
  get 'is_signed_in', to: 'auth#is_signed_in?'
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
