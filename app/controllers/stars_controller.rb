class StarsController < ApplicationController
  before_action :set_star, only: [:show, :edit, :update, :destroy]

  # GET /stars
  # GET /stars.json
  def index
    @stars = Star.take(4)
  end

  # GET /stars/1
  # GET /stars/1.json
  def show
    @star.tagmaps.collect{ |t| t.tag }

    respond_to do |format| 
      format.html { render :show}
      format.json {render json: @star}
    end
  end

  # GET /stars/new
  def new
    @star = Star.new
    @tag = Tag.new
  end

  # GET /stars/1/edit
  def edit
    @tags=[]
    @tagmaps = Tagmap.where("star_id = ?", @star.id)
    @tagmaps.each do |tagmap| 
      @tags.push Tag.find(tagmap.tag_id)
    end
    @tag = Tag.new
    respond_to do |format| 
      format.html { render :edit }
      format.json { render json: @tags }
    end
  end

  # POST /stars
  # POST /stars.json
  def create
    @star = Star.new(star_params)

    respond_to do |format|
      if @star.save
        format.html { redirect_to @star, notice: 'Star was successfully created.' }
        format.json { render :show, status: :created, location: @star }
      else
        format.html { render :new }
        format.json { render json: @star.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stars/1
  # PATCH/PUT /stars/1.json
  def update
    respond_to do |format|
      if @star.update(star_params)
        format.html { redirect_to @star, notice: 'Star was successfully updated.' }
        format.json { render :show, status: :ok, location: @star }
      else
        format.html { render :edit }
        format.json { render json: @star.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stars/1
  # DELETE /stars/1.json
  def destroy
    @star.destroy
    respond_to do |format|
      format.html { redirect_to stars_url, notice: 'Star was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_star
      @star = Star.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def star_params
      params.require(:star).permit(:name, :avatar, :summart, :favorite, :score, :intro_image)
    end
end
