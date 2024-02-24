import llm
from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.embeddings import huggingface

llm = llm.openhermes

template = """
    Tu es un assistant virtuel qui doit répondre à une question.
    Si tu ne sais pas, dis simplement que tu ne sais pas.
    Si tu utilises de la 'Documentation', cites le fichier source et la page après avoir fait ta 'Réponse'.
    Réponds dans la même langue que la question.

    Documentation:
    ###
    {documents}
    ###
    
    Question: 
    ###
    {input}
    ###

    Réponse:"""

query = "Qui est Timothée BIGE ?"

loader = PyPDFLoader("pv.pdf")
docs = loader.load()

text_splitter = CharacterTextSplitter(chunk_size=120, chunk_overlap=0, separator=". ")
texts = text_splitter.split_documents(docs)

embeddings = huggingface.HuggingFaceEmbeddings()
db = Chroma.from_documents(texts, embeddings)

retriever = db.as_retriever(search_kwargs={"k": 4})

documents = retriever.get_relevant_documents(query)

clean_docs = "\n\n".join(
    [f"Document:\n" + (str)(documents[i].page_content).replace('\n', ' ') + "\nSources: " + documents[i].metadata["source"] + " page " + (str)(documents[i].metadata["page"]) for i, d in enumerate(documents)]
)

prompt = template.format(input=query, documents=clean_docs)
answer = llm.predict(prompt)

print(answer)
