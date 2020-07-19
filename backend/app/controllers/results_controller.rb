class ResultsController < ApplicationController

    def index
        byebug
    end

    def create
        

        user = User.find_by(username: params[:username])

        if (user && params[:test_id])
        
            user.results.build(test_id: params[:test_id], test_subject: params[:test_subject], test_difficulty: params[:test_difficulty], test_score: params[:test_score])
            user.save
            render json: user, only: [:username, :name], include: [:results]
        end
    end

end
