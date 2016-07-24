json.array!(@commets) do |commet|
  json.extract! commet, :id, :customer_name, :customer_avatar, :star_name, :virtual_time, :content
  json.url commet_url(commet, format: :json)
end
