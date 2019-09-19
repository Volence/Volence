from smtplib import SMTP
smtpObj = SMTP('smtp.gmail.com', 587)
try:
    smtpObj.ehlo()
    smtpObj.starttls()
    smtpObj.login('malevolence88088@gmail.com', 'Coolpoop8')
    emailContent = f"""
    Subject: Test
    This is a test being sent!
    """
    response = smtpObj.sendmail('bob@example.com', 'sameyer17@gmail.com', 'Subject: Test Email.\nThis is a test email')
    if response:
        f"Error: {response}"
except expression as identifier:
    f"Error: {identifier}"
smtpObj.quit()