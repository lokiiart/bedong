json.array!(@stars) do |star|
  json.extract! star, :id, :name, :avatar, :summart, :favorite, :score, :intro_image
  json.url star_url(star, format: :json)
end
