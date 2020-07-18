class SessionsController < ApplicationController

    def create()
        # byebug
        user = User.find_by(username: params[:username])

        if (user && user.authenticate(params[:password]))
            render json: user, only: [:username, :name], include: [:results]
        end
    end

end