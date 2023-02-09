class Api::V1::SessionsController < Api::V1::ApplicationController

    def login
        # Step 0: find user by whatever info was provided (email/pswd)
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            render json: user, status: 200
        else
            render json: {error: "Invalid Credentials!"}, status: 451
        end
    end

    def logout
    end
    
end
