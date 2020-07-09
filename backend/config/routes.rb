Rails.application.routes.draw do
  post '/sessions', to: 'sessions#create'
  
  resources :results
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
