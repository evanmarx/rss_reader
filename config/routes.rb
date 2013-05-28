NewsReader::Application.routes.draw do
  root to: "feeds#index"

  resources :users do
    resources :feeds
  end

  resources :feeds do
    resources :entries
  end

end
