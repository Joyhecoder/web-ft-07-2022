import data 

#? Loop through the companies data and display logo image and company name on an html page. 
#* to run the file:  python3 companies.py > index.html

companies = data.data

print(companies)

html = """

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>  
    
        body{
            margin:0px;
        }
        
    </style>
</head>
<body>
"""

#? Write code here

<<<<<<< HEAD
for i in companies:
    
    html += f"""
    
    """

    # html += f"""
    # <div style='logo: {i['logo']}></div>\n"""
    
    # html += f"""\t
    # <div style='name:{i['business_name']}></div>\n"""
html += f'''<div> <h2> {i["business_name"]}</h2><img src="{i["logo"]}"></div>'''
</body>
› </html>


=======
html += """

</body>
</html>

"""
>>>>>>> 24ed880ede57d8ef431ecf204953c3a704ac97c7

print(html)