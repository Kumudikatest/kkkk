import requests

def handler(event, context):
 
    try:
        res = requests.get(
            "https://api-sandbox.starlingbank.com/api/v2/kyc/result",
            params={},
            headers={"Accept":"application/json"}
        )
        print(res)
        # your code goes here
    except BaseException as e:
        # error handling goes here
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
