const orderDataParser = (response) => {

  let tooltipDatas = [];
  let mainDatas = [];
  if ((response?.length !== 0 && response  !== undefined) && response !== 404 && response) {
    for (let data of response) {
      tooltipDatas.push({
        exchangeOrderId: data.exchangeOrderId,
        exchangeType: data.exchangeType,
      });
      mainDatas.push({
        remoteOrderId: data.remoteOrderId,
        exchangeOrderId: data.exchangeOrderId,
        exchange: data.exchange,
        buyorsell: data.buyorsell,
        exchangeOrderTime: data.exchangeOrderTime,
        scripName: data.scripName,
        quantity: data.quantity,
        rate: data.rate,
        orderStatus: data.orderStatus,
        atMarket: data.atMarket,
      });
    }
  }
  return { mainDatas, tooltipDatas };
};

export default orderDataParser;
