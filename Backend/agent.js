from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage,AIMessage

model=ChatGroq(model_name="llama-3.3-70b-versatile",api_key="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",temperature=0.3)

chat_history=[];
system=SystemMessage(content="You a Math expert dont provide any extra info expect math related ");
chat_history.append(system)
while True :
    chat=input("Human : ");
    if(chat=="exit"):
        print("Successfully Exit :) ")
        break;
    else :
        chat_history.append(HumanMessage(content=chat))
        result =model.invoke(chat_history)
        print("AI : ",result.content);
        chat_history.append(AIMessage(content=result.content))
