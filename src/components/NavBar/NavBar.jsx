import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
    {
        key: 1,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                About
            </a>
        ),
        icon: <SmileOutlined/>
    },
    {
        key: 2,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                Skills
            </a>
        ),
        icon: <SmileOutlined/>
    },
    {
        key: 3,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                Projects
            </a>
        ),
        icon: <SmileOutlined/>
    },
    {
        key: 4,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                Resume
            </a>
        ),
        icon: <SmileOutlined/>
    },
    {
        key: 5,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
                Contact Me
            </a>
        ),
        icon: <SmileOutlined/>
    }
]


function NavBar(){
    return(
        <>
            <div>
                <h2>Darren Harris</h2>
                <p></p>
            </div>
            <div style={ {
                textAlign: 'center'
            } }>
                <Dropdown 
                    menu={ {items} }
                >
                    <Space>
                        Get To Know Me
                        <DownOutlined/>
                    </Space>
                </Dropdown>
            </div>
        </>
    )
}

export default NavBar