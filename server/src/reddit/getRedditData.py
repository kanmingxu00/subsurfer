import praw
from praw.models import MoreComments
import json
import sys
import os

absFilePath = os.path.join(os.path.dirname(__file__), '../../config.json')
with open(absFilePath) as json_data:
    config = json.load(json_data,)

reddit = praw.Reddit(client_id=config['clientId'], client_secret=config['clientSecret'],
 user_agent=config['userAgent'])

def jsonDumpsData(title, url, score):
    postData = {}
    postData['title'] = title
    postData['url'] = url
    postData['score'] = score
    return postData

def fetchOneSR(subreddit):
    commentsArray = []
    print(subreddit)
    for submission in reddit.subreddit(subreddit).top(limit=10):
        title = submission.title
        url = submission.url
        score = submission.score
        commentsArray.append(jsonDumpsData(title, url, score))
    print(commentsArray)
    return commentsArray
