class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :validatable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :omniauthable

  has_many :orders
  has_many :social_media

  class << self
    def find_social_media(user)
      user.social_media if user
    end

    def find_or_create_with(user_info)
      social_medium = SocialMedium.find_by(sm_id: user_info["id"])
      user = social_medium ? User.find_by(id: social_medium.user_id) : nil
      if user.nil?
        user = User.create()
        user.update(email: user_info["email"]) if user_info["email"]
        session[:user_id] = user.id
      end
      user
    end
  end
end
