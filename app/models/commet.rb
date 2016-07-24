class Commet < ApplicationRecord
  mount_uploader :customer_avatar, CustomerUploader
end
