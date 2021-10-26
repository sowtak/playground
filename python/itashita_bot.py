import tweepy

consumer_key = “CONSUMER KEY HERE”
consumer_secret = “CONSUMER SECRET KEY HERE”
access_token = “ACCESS TOKEN HERE”
access_token_secret = “ACCESS TOKEN SECRET HERE

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)
user = api.me
()
print(“I am “ + user.name

)
search = input("SPECIFIC WORD HERE: ")
numberOfTweets = 40 # Amount of tweets you want retweeted

for tweet in tweepy.Cursor(api.search, search).items(numberOfTweets):
try:
tweet.retweet()
print('You Just Retweeted A Tweet :)')
except tweepy.TweepError as e:
print(e.reason)
except StopIteration:
break
