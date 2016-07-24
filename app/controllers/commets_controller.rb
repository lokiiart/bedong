class CommetsController < ApplicationController
  before_action :set_commet, only: [:show, :edit, :update, :destroy]

  # GET /commets
  # GET /commets.json
  def index
    @commets = Commet.all
  end

  # GET /commets/1
  # GET /commets/1.json
  def show
  end

  # GET /commets/new
  def new
    @commet = Commet.new
  end

  # GET /commets/1/edit
  def edit
  end

  # POST /commets
  # POST /commets.json
  def create
    @commet = Commet.new(commet_params)

    respond_to do |format|
      if @commet.save
        format.html { redirect_to @commet, notice: 'Commet was successfully created.' }
        format.json { render :show, status: :created, location: @commet }
      else
        format.html { render :new }
        format.json { render json: @commet.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /commets/1
  # PATCH/PUT /commets/1.json
  def update
    respond_to do |format|
      if @commet.update(commet_params)
        format.html { redirect_to @commet, notice: 'Commet was successfully updated.' }
        format.json { render :show, status: :ok, location: @commet }
      else
        format.html { render :edit }
        format.json { render json: @commet.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /commets/1
  # DELETE /commets/1.json
  def destroy
    @commet.destroy
    respond_to do |format|
      format.html { redirect_to commets_url, notice: 'Commet was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_commet
      @commet = Commet.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def commet_params
      params.require(:commet).permit(:customer_name, :customer_avatar, :star_name, :virtual_time, :content)
    end
end
