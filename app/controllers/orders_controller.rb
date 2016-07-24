# coding: utf-8
class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token, only: [:create]

  # GET /orders
  # GET /orders.json
  def index
    @orders = Order.all
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)

    if(@order.payment=="支付宝")
      if @order.save
        pre_order = {
          #'service': 'create_direct_pay_by_user',
          'service': 'alipay.wap.create.direct.pay.by.user',
                     'partner': '2088221413889518',
                     'seller_id': '2088221413889518',
                     'payment_type': '1',
                     'out_trade_no': @order.id,
                     'subject': @order.baby,
                     'total_fee': @order.price,
                     'return_url': 'http://www.51upali.com',
                     'show_url': 'http://www.51upali.com',
                     '_input_charset': 'utf-8'
        }.sort_by{ |key, val| key }
        #加入回调地址
        @alipay_order = {
          'service': 'alipay.wap.create.direct.pay.by.user',
                         'partner': '2088221413889518',
                         'seller_id': '2088221413889518',
                         'payment_type': '1',
                         'out_trade_no': @order.id,
                         'subject': @order.baby,
                         'total_fee': @order.price,
                         'return_url': 'http://www.51upali.com',
                         'show_url': 'http://www.51upali.com',
                         '_input_charset': 'utf-8',
                         'sign': alipay_sign(pre_order)
        }
        render layout: false, template: 'home/alipay'
      end
    end

    # respond_to do |format|
    #   if @order.save
    #     format.html { redirect_to @order, notice: 'Order was successfully created.' }
    #     format.json { render :show, status: :created, location: @order }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @order.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def alipay_sign ordermap
    presign=''
    ordermap.each do |key, val|
      presign+="#{key}=#{val}&"
    end
    presign.chop!
    md5_key='h1zyv5kci0tftioi6l4eqc7wgoq6yjv0'
    presign+=md5_key
    preurl=Digest::MD5.hexdigest(presign)
    return preurl.to_s
  end
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def order_params
      # params.require(:order).permit(:phone, :customer, :price, :payment, :address, :payoff, :flow)
      params.require(:order).permit(:phone, :customer, :price, :payment, :baby)
    end
end
