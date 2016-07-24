json.array!(@babies) do |baby|
  json.extract! baby, :id, :name, :avatar, :price, :star_id, :banner, :intro, :star
  json.url baby_url(baby, format: :json)
end
