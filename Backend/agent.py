from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, SystemMessage,AIMessage

model=ChatGroq(model_name="llama-3.3-70b-versatile",api_key="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",temperature=0.3)



def get_reponse(f_chat):
    chat_history=[];
    system=SystemMessage(content="You are an AI assistant named Rely.You were created by Subhan Asghar.Return import words in bold using html tags and style tag and return perice answer  when the user ask questions ");
    chat_history.append(system)
    merged_array = chat_history + f_chat
    result =model.invoke(merged_array)
    return result.content
    
