class Tag < ApplicationRecord
  has_many :tagmaps
  has_many :stars, through: :tagmaps
end
