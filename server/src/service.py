import src.reddit.getRedditData as reddit

def getOneSRAnalysis(subreddit):
  # comments = reddit.fetchOneSR(subreddit)
  # comments.sort(key=lambda x: x['score'], reverse=True)
  # commentString = {
  #   'text': ''
  # }

  # for comment in comments:
  #   commentString['text'] += comment['text']

  # topComments = comments[:10]
  # topCommentsMap = map(lambda x: x['text'], topComments)
  # topCommentsText = list(topCommentsMap)

  # # cleanTopComments(topCommentsText)
  topArticles = reddit.fetchOneSR(subreddit)
  return { 'articles': topArticles }
