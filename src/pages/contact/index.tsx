import { useEffect, useState } from 'react';
import { Button } from '../../components/button';
import { GlassCard } from '../../components/glassCard';
import { Input } from '../../components/input';
const googleSheetApi: string = process.env.REACT_APP_GOOGLE_SHEET_API || ""

export const Contact = () => {

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    question: string;
  }> ({
    name: "",
    email:"",
    question:""
  });

  const [active, setActive] = useState<boolean>(false);

  const {name,email,question} = formData;

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }


  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        googleSheetApi,
        {
          method: 'POST',
          mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );
      const result = await response.json();
      console.log("Contact form response:",result);

      setFormData({name:"", email:"", question:""});
    }
    catch(error) {
      console.log("Error:",error);
      alert('Error submitting form.');
    }
  }

  useEffect(() => {
    if(name != "" && email != "" && question != ""){
      setActive(true);
    }
    else{
      setActive(false);
    }
  },[formData]);

  const labelClass = 'my-4';
  const wrapperClass = 'my-4';
  const inputClassName = 'pb-20';



  return (
    <div className="flex flex-col w-full px-8 my-10" id='contact'>
      <div className="w-11/12 md:w-6/12 mx-auto mb-8">
        <h1 className="text-center text-6xl text-white font-bold">
          Contact
        </h1>
        <GlassCard className="flex flex-col gap-y-3 !mt-8 border-[1px] border-gray-900" glassBgClassName='!bg-[#00021B]'>
          <div className="flex flex-col px-3 md:px-10">
            <Input
              name="name"
              label="Name"
              value={name}
              placeholder="Your Name"
              labelClassName={labelClass}
              className={wrapperClass}
              onChange={(e) => {handleChange(e)}}
            />
            <Input
              name="email"
              label="Email"
              value={email}
              placeholder="Your Email ID"
              labelClassName={labelClass}
              onChange={(e) => {handleChange(e)}}
            />
            <Input
              name="question"
              label='Question/Comment'
              value={question}
              placeholder="Your question/comment"
              labelClassName={labelClass}
              className={wrapperClass}
              inputClassName={inputClassName}
              onChange={(e) => {handleChange(e)}}
            />
            <Button text="Send" className={active ? "mx-auto !w-[150px] !border-0 mt-4" : "mx-auto !w-[150px] !border-0 mt-4 text-opacity-60"} onClick={(e) => handleSubmit(e)} />
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
