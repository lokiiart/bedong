class Star < ApplicationRecord
  mount_uploader :avatar, AvaterUploader
  mount_uploader :intro_image, StarUploader
  has_many :tagmaps
  has_many :tags, through: :tagmaps
  belongs_to :baby
end
