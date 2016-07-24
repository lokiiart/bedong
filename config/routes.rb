Rails.application.routes.draw do
  resources :orders
  get 'home/index'
  resources :babies
  resources :commets
  resources :stars
  resources :students
  resources :tags

  get '/admin/*path' => redirect('/orders')
  get '*path' => redirect('/')
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
