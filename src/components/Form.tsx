import { useState, FormEvent } from "react"
import { User } from "../types/user";
import { validate } from "../utils/validate";


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const [errors, setErros] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setErros(null);

        const data:  User = {
            name,
            email,
            agree,
        };
        const validateErrors = validate(data);

    

        if(Object.keys(validateErrors).length > 0){
            setErros(validateErrors);
            return;
        }
         
        setName("")
        setEmail("")
        setAgree(false)

        alert("Obrigado por se inscrever!")
    }


    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite o seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400" value = {name} onChange={(e) => 
                setName(e.target.value)}
                />
                {errors?.name && (
                    <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
                )}
            </div>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="email">E-mail</label>
                <input type="email" placeholder="Insira o seu e-mail" className="rounded-lg py-2 px-2 text-sm placeholder:text-stone-400" value = {email} onChange={(e) => setEmail(e.target.value)}
                />
                 {errors?.email && (
                    <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
                )}
            </div>
            <div className="flex flex-col">
                <a href="#"className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 items-center">
                 <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}
                  />    
                <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
               
                </div>
                 {errors?.agree && (
                    <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
                )}
            </div>
            <button type="submit" className="bg-teal-800 hover:bg-teal-900 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar</button>
        </form>
    );
};

export default Form