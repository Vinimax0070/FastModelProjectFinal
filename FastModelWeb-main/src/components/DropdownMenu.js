import React, { useState } from 'react';
import './DropdownMenu.css'; // Adicione estilos personalizados aqui, se necessário

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
 

    return (
        <div className="dropdown">
            <button onClick={toggleMenu} className="dropdown-toggle">
                Menu
            </button>
            

            <button onClick={toggleMenu} className="dropdown-toggle">
                Menu
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a href="#option1" className="dropdown-item">Opção 1</a>
                    <a href="#option2" className="dropdown-item">Opção 2</a>
                    <a href="#option3" className="dropdown-item">Opção 3</a>
                </div>
            )}
            
        </div>

        
    );
    

   
}

export default DropdownMenu;
