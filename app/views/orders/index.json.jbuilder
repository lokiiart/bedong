json.array!(@orders) do |order|
  json.extract! order, :id, :phone, :customer, :price, :payment, :address, :payoff, :flow
  json.url order_url(order, format: :json)
end
