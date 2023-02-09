class User < ApplicationRecord
  has_secure_password #password, password_confirmation, password_recovery, authenticate

  has_many :articles

end
