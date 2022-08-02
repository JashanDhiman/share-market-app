from truedata_ws.websocket.TD import TD
from copy import deepcopy
import pandas as pd
from datetime import date
import time

username = 'wssand037'
password = 'jashan037'


td_app = TD(username, password, live_port=8084)

symbol = 'NIFTY-I'
barsize = '1min'
# barsize = 'EOD'

# Gets current day 1 min data - Note if market not started / holiday, you will get a No Data ! return
# hist_data_3 = td_app.get_historic_data(symbol) 

# Gets current day data with the bar size of your choice - Note if market not started / holiday, you will get a No Data ! return
# hist_data_3 = td_app.get_historic_data(symbol, bar_size=barsize)

# Specify Bar size and duration in No. of Days
hist_data_3 = td_app.get_historic_data(symbol, duration='4 D', bar_size=barsize)

# Get Data for specified bar size for any start & end date-time. Default end time = now
# hist_data_3 = td_app.get_historic_data(symbol, start_time=datetime.datetime(2020, 9, 17, 15, 28, 0),bar_size=barsize, end_time=datetime.datetime(2020, 9, 19, 23, 59, 0))

# Get last n bars data for specific bar size. Works best with & recommended for 1/5 min bars.
# hist_data_3=td_app.get_n_historical_bars(symbol, no_of_bars=30, bar_size=barsize)

df_hist_data = pd.DataFrame(hist_data_3)

print('\nSymbol > %s' %symbol)
print('Bar Interval > %s\n' %barsize)

print(df_hist_data)

td_app.disconnect()