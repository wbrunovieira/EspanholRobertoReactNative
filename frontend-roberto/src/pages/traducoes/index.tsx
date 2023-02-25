import { Banner, Container, DocTitleBox, Documents, DocumentsBox } from "./styles";

import Image from "next/image";

import BannerImg from '../../assets/BannerTraducoes.png'
import TraductionIcon from '../../assets/TraducaoIcon.svg'

export default function Traducoes() {
    return (
        <Container>
            <Banner>
                <Image src={BannerImg} alt="Banner" />
                <h1>Traduções</h1>

            </Banner>
            <DocumentsBox>
                <Documents color="yellow">
                    <DocTitleBox color="yellow">
                        <h2> Tradução 1</h2>
                        <Image src={TraductionIcon} alt="icone traducao" />
                    </DocTitleBox>

                    <p>Lorem ipsum dolor sit amet. Vel enim dolores aut iusto tenetur eos sint eveniet et incidunt placeat At dolorem quae id incidunt eius. Qui quia aliquam aut necessitatibus libero eum maiores dignissimos et maiores tempora? Est incidunt voluptatum sed accusamus error non dicta dolor non animi quos aut obcaecati necessitatibus.

                    Ut porro explicabo qui esse sint in consequatur repellat et quia doloremque. At deserunt nostrum non Quis harum est asperiores possimus aut dicta consequatur inventore pariatur et molestias provident. Ex asperiores fugit rem ducimus assumenda quo voluptatem quia ut quibusdam minima! Sit autem nihil id eius itaque sit necessitatibus tempore!

                    Et consectetur deleniti qui ullam aperiam aut rerum facilis et repudiandae consequatur qui eaque fuga a voluptates autem ex ullam aliquam. In iure molestiae qui distinctio reprehenderit est architecto harum sed nisi voluptates. Corporis omnis a quas debitis qui rerum voluptas et voluptas doloremque consequatur natus a quam rerum. Sit quae beatae eos veniam quisquam sed sint tenetur aut esse iusto aut provident nihil qui libero perferendis aut atque quae.
                    </p>
                </Documents>

                <Documents color="blue">
                    <DocTitleBox color="blue">
                        <h2> Tradução 2</h2>
                        <Image src={TraductionIcon} alt="icone traducao" color="#fff"/>
                    </DocTitleBox>

                    <p>Lorem ipsum dolor sit amet. Vel enim dolores aut iusto tenetur eos sint eveniet et incidunt placeat At dolorem quae id incidunt eius. Qui quia aliquam aut necessitatibus libero eum maiores dignissimos et maiores tempora? Est incidunt voluptatum sed accusamus error non dicta dolor non animi quos aut obcaecati necessitatibus.

                    Ut porro explicabo qui esse sint in consequatur repellat et quia doloremque. At deserunt nostrum non Quis harum est asperiores possimus aut dicta consequatur inventore pariatur et molestias provident. Ex asperiores fugit rem ducimus assumenda quo voluptatem quia ut quibusdam minima! Sit autem nihil id eius itaque sit necessitatibus tempore!

                    Et consectetur deleniti qui ullam aperiam aut rerum facilis et repudiandae consequatur qui eaque fuga a voluptates autem ex ullam aliquam. In iure molestiae qui distinctio reprehenderit est architecto harum sed nisi voluptates. Corporis omnis a quas debitis qui rerum voluptas et voluptas doloremque consequatur natus a quam rerum. Sit quae beatae eos veniam quisquam sed sint tenetur aut esse iusto aut provident nihil qui libero perferendis aut atque quae.
                    </p>
                </Documents>

                <Documents color="blue">
                    <DocTitleBox color="blue">
                        <h2> Tradução 2</h2>
                        <Image src={TraductionIcon} alt="icone traducao" color="#fff"/>
                    </DocTitleBox>

                    <p>Lorem ipsum dolor sit amet. Vel enim dolores aut iusto tenetur eos sint eveniet et incidunt placeat At dolorem quae id incidunt eius. Qui quia aliquam aut necessitatibus libero eum maiores dignissimos et maiores tempora? Est incidunt voluptatum sed accusamus error non dicta dolor non animi quos aut obcaecati necessitatibus.

                    Ut porro explicabo qui esse sint in consequatur repellat et quia doloremque. At deserunt nostrum non Quis harum est asperiores possimus aut dicta consequatur inventore pariatur et molestias provident. Ex asperiores fugit rem ducimus assumenda quo voluptatem quia ut quibusdam minima! Sit autem nihil id eius itaque sit necessitatibus tempore!

                    Et consectetur deleniti qui ullam aperiam aut rerum facilis et repudiandae consequatur qui eaque fuga a voluptates autem ex ullam aliquam. In iure molestiae qui distinctio reprehenderit est architecto harum sed nisi voluptates. Corporis omnis a quas debitis qui rerum voluptas et voluptas doloremque consequatur natus a quam rerum. Sit quae beatae eos veniam quisquam sed sint tenetur aut esse iusto aut provident nihil qui libero perferendis aut atque quae.
                    </p>
                </Documents>

                <Documents color="yellow">
                    <DocTitleBox color="yellow">
                        <h2> Tradução 1</h2>
                        <Image src={TraductionIcon} alt="icone traducao" />
                    </DocTitleBox>

                    <p>Lorem ipsum dolor sit amet. Vel enim dolores aut iusto tenetur eos sint eveniet et incidunt placeat At dolorem quae id incidunt eius. Qui quia aliquam aut necessitatibus libero eum maiores dignissimos et maiores tempora? Est incidunt voluptatum sed accusamus error non dicta dolor non animi quos aut obcaecati necessitatibus.

                    Ut porro explicabo qui esse sint in consequatur repellat et quia doloremque. At deserunt nostrum non Quis harum est asperiores possimus aut dicta consequatur inventore pariatur et molestias provident. Ex asperiores fugit rem ducimus assumenda quo voluptatem quia ut quibusdam minima! Sit autem nihil id eius itaque sit necessitatibus tempore!

                    Et consectetur deleniti qui ullam aperiam aut rerum facilis et repudiandae consequatur qui eaque fuga a voluptates autem ex ullam aliquam. In iure molestiae qui distinctio reprehenderit est architecto harum sed nisi voluptates. Corporis omnis a quas debitis qui rerum voluptas et voluptas doloremque consequatur natus a quam rerum. Sit quae beatae eos veniam quisquam sed sint tenetur aut esse iusto aut provident nihil qui libero perferendis aut atque quae.
                    </p>
                </Documents>


                
            </DocumentsBox>
            
        </Container>
    )
}