class Baby < ApplicationRecord
  mount_uploader :avatar,  BabyAvatarUploader
  mount_uploader :banner,  BabyBannerUploader
  mount_uploader :intro,  BabyIntroUploader
  has_one :star
end
