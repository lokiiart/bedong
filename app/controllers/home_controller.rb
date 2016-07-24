# coding: utf-8
class HomeController < ApplicationController
  def index
    @Fool = Fool.new()
    @Fool.ip=request.remote_ip
    @Fool.page="index"
    if @Fool.save
      logger.info('a Fool has passed')
    else
      logger.info('a strange Fool')
    end
    render layout: false, template: 'home/index'
  end

  private


end
