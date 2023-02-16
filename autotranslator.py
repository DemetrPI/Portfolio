# This file extracts text to be translated from HTML file using BeautifulSoap library, creates JSON with original text and translated text, and modifies original HTML file, preparing it for translation, if you don`t want to let Google to autotranslate your site for some reasons. 

from bs4 import BeautifulSoup
import json
import pandas as pd
import re
import openpyxl
import xlrd



sourceFile = "index.html"
with open(sourceFile) as fp:
    soup = BeautifulSoup(fp, 'html.parser')


counter =0 
origin = {} #original text from HTML
translated = {} #translated text from HTML 
outputText = [] #cleared text for further translation
outputKeys = [] #keys for text to create new dict with translation

# list of tags where text to be translated may present, you may correct it according those used in your project. 
tagList = ["title", "p", "h1", "h2", "h3", "h4", "h5", "h6", "header", "form", "li", "span"]



# loops all tags in tagList, checks, if there is text inside the tag, and creates dictionary for Json file. 
def argument_insert(argument):
    for argument in soup.find_all(argument):  
        global counter # access to global variable to use counter inside function
        value = argument.string #text inside tags
        if value is not None: #checks, if there is text inside tag
            value = re.sub("\n +"," ", value) #cleaning data from spaces and end-of-line symbols
            if value != "\n":
                key = "translate"+str(counter) 
                origin.update({key: value})
                outputText.append(value)
                outputKeys.append(key)
                argument['class'] = argument.get('class',[]) +["translate"+str(counter)] #applying new class as a mark for translation
                counter +=1
    return counter #counter is used for end-to-end numbering, so global variable is used


# create output Excel file for translation
def convert_to_pandas_dataframe(outputText, outputXlsFile):
    df=pd.DataFrame(outputText, columns=['qwe123asd']) #to avoid column header translation to any language by Google, header should be named in abracadabra way :-)
    df.to_excel(outputXlsFile, sheet_name="TranslationData", engine='openpyxl')


# read input file, convert translation to list and create new dict with translated data, which corresponds to origin dict
def convert_xlx_to_list(translatedFile):
    df = pd.read_excel(translatedFile)
    translatedList = df.qwe123asd.values.tolist()
    key = 0
    keys=""
    for value in translatedList:
        keys = "translate"+str(key)
        translated.update({keys:value})
        key +=1
    return translated    

# output HTML file
def output_to_HTML(outputHTML,soup):
    output = open (outputHTML, 'w')
    newSoup = soup.prettify() #prettify output HTML file
    output.write(newSoup)

#write data to Json file
def write_json_to_file(json_obj, outputJsonFile):
    output = open (outputJsonFile, 'w')
    output.write(json_obj)

#call of argument_insert function
for argument in tagList:
    argument_insert(argument)


outputHTML = input("Input file name for modified HTML file (default is output.html): ")
if len(outputHTML)<1:
    outputHTML = "output.html"
output_to_HTML(outputHTML, soup)


#Google Translate doesn`t support .txt files, only .doc, .pdf, .xlsx and some other types, so output file is Excel.
outputXlsFile = input("Input file name for the file to be translated (Excel, default is output.xlsx): ")
if len(outputXlsFile)<1:
    outputXlsFile = "output.xlsx"
convert_to_pandas_dataframe(outputText, outputXlsFile)


translatedFile = input("Input file name to load translation from (Excel, default is output.xlsx):" )
if len(translatedFile)<1:
    translatedFile = "output.xlsx"
convert_xlx_to_list(translatedFile)


outputJsonFile = input("Input file name for JSON file (default is output.json): ")
if len(outputJsonFile)<1:
    outputJsonFile = "output.json"
    

outputJson = {"origin": origin, "ukr":translated}
jsonObject = json.dumps(outputJson,ensure_ascii=False, indent=4)
write_json_to_file(jsonObject, outputJsonFile)