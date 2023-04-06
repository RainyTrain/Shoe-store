import Link from 'next/link';
import { useEffect } from 'react';

export default function Home(props: any) {
  return (
    <main>
      <ul>
        {props.posts.map((post: any, id: number) => (
          <Link href={`/users/${post.id}`} legacyBehavior>
            <a>{post.name}</a>
          </Link>
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta mollitia numquam
        facilis officia provident iure dicta suscipit consectetur dolorem saepe veritatis adipisci
        illum fugiat, non atque, ut vero cupiditate. Libero velit voluptatem nesciunt, eveniet
        voluptatibus ab rem corrupti eius, tempora, quod corporis officiis eaque! Ab aut beatae
        voluptas temporibus doloremque laboriosam! A, dolore eligendi. Corrupti temporibus
        recusandae porro reprehenderit. Repellat accusantium quae, impedit, expedita molestias fugit
        similique consequuntur, magnam atque temporibus iste voluptatum quasi. Nisi, molestiae, amet
        quia iusto aperiam tempora fugit sed quas earum suscipit, inventore pariatur quos.
        Voluptates impedit officiis ipsum totam, dolorum, temporibus porro nam, at deleniti fugit
        obcaecati deserunt enim? Excepturi accusantium aliquid deleniti laboriosam? In aspernatur
        excepturi expedita optio nulla veritatis doloremque obcaecati perferendis! Doloribus beatae
        ducimus facere, sint eos esse eius, itaque nulla ipsa tenetur vero laborum reiciendis.
        Consequuntur, sapiente, rem dolorem corporis error laboriosam assumenda aliquam alias ex,
        asperiores accusamus harum nam. Ab, rerum impedit temporibus accusantium quas repellendus
        delectus distinctio aut iste. Numquam non aut porro, vitae qui fugiat nisi placeat, odio
        delectus ratione eaque totam iusto incidunt recusandae. Repellendus, doloremque. Natus
        nulla, nostrum voluptate suscipit in perspiciatis tenetur accusantium odit possimus maxime
        nisi incidunt optio rerum sunt voluptatem non ipsam sit cum sed! Magnam exercitationem
        asperiores impedit consequatur provident odio. Laudantium amet, deserunt maiores magnam
        dolorem autem ad esse optio a dolorum dolore labore non earum cupiditate dolor iure, eaque
        assumenda ea qui! Repellat tempore pariatur cumque magnam debitis officiis. Saepe autem
        aliquam exercitationem, pariatur voluptate possimus quibusdam amet, obcaecati tenetur quos,
        incidunt voluptas natus maiores! Ad labore soluta enim minima. Amet rerum quam sint
        doloribus quidem iure nobis aspernatur. Accusantium quam aut aliquam repudiandae cupiditate
        ab, nemo exercitationem veniam eum commodi nisi optio eveniet suscipit libero hic adipisci
        ipsam fugit deserunt amet sunt itaque! Odit nostrum doloremque accusantium quibusdam!
        Ducimus, rerum voluptas quas similique quaerat accusantium illo molestias sed, harum
        doloremque nisi rem excepturi eius atque, quia labore quam? Cumque tempore ipsum,
        repellendus aperiam eum distinctio eos autem nostrum! Magnam expedita, aliquam eum at
        aliquid non recusandae earum minima nesciunt delectus! Fuga error necessitatibus in
        voluptatum, dolore neque ab optio, dolores, laboriosam exercitationem officia ipsam. Quasi
        officiis alias vitae? Ut officia, animi aperiam fugiat officiis at unde. Nemo tenetur
        reiciendis eveniet saepe. Et accusantium odio sint possimus illum illo laboriosam mollitia
        ullam amet delectus, atque nulla in odit voluptas? Aperiam ratione quae consequatur
        temporibus repellat cupiditate eveniet adipisci corrupti! Voluptates nihil, asperiores quis
        aperiam ducimus, officia modi amet pariatur odio eveniet possimus fugit explicabo, sed minus
        recusandae qui. Amet. Facere in maxime commodi assumenda illo blanditiis deleniti! Nemo
        obcaecati harum necessitatibus ducimus ea recusandae molestiae repellendus vel facere
        nostrum incidunt laudantium debitis tempora nam est, distinctio eum aut culpa? Repellat
        debitis perspiciatis voluptatibus dolores dolorem iure placeat sit cumque doloribus aliquid
        qui, eius nulla veritatis praesentium! Qui, repudiandae culpa? Eligendi nam quia sit
        accusamus eius voluptatem nostrum totam! Sapiente. Laborum sit quaerat maiores similique at
        ullam architecto, omnis tempore? Consectetur non corporis, suscipit error nobis repellat
        mollitia nulla doloremque ipsum dolor perferendis eaque reiciendis, maxime ratione officiis
        vero dolorum? Quisquam dolores illum cum dolore itaque eos similique aperiam alias commodi
        odio vel placeat cumque quia suscipit asperiores, recusandae dolor enim laborum. Aliquam ad
        omnis recusandae earum iusto aut natus. Molestiae mollitia provident molestias fugit odio
        consequatur quod incidunt voluptates illum tempora, enim rem voluptatem quia possimus
        sapiente quaerat temporibus itaque fuga reprehenderit eveniet consequuntur! Exercitationem a
        delectus provident temporibus. Illo itaque rerum asperiores, soluta quasi reprehenderit
        voluptate totam. Saepe accusantium iste ipsa nam architecto eligendi enim labore sequi unde
        blanditiis itaque explicabo, provident aliquam voluptas, odit eius, atque minima. Veniam
        maiores dolore explicabo esse totam adipisci quaerat, eaque possimus similique animi aperiam
        eveniet ratione quae aliquid accusantium eum repellendus illum consequatur! Ut ducimus animi
        ipsam illo error odit beatae! Dignissimos culpa cupiditate asperiores ipsa unde repudiandae
        et corporis, nisi inventore, hic alias dolores aspernatur veritatis accusantium consequatur
        deleniti. Explicabo, at ipsam laboriosam suscipit tempore commodi voluptatibus rerum
        repudiandae nostrum. Modi unde fugiat consequuntur laudantium error, ipsam eaque aliquam
        earum nobis sunt dolorem saepe animi dolore. Vitae nulla labore maxime ad placeat. Illo
        dignissimos exercitationem, distinctio sint enim odio eaque. Est delectus libero ex laborum
        vitae et aspernatur soluta atque autem, repellat reprehenderit, consectetur aperiam dolorum,
        nisi voluptates rem. Excepturi tempora aspernatur eum? Distinctio excepturi quas delectus
        molestiae totam obcaecati. Commodi quod eveniet delectus molestias sequi saepe vitae eaque
        dolor iste animi adipisci optio, aliquam magnam iusto recusandae enim quae laudantium
        inventore, blanditiis minima est consequatur placeat. Laboriosam, quia iste? Deserunt iusto
        veniam facere architecto! Officia ad possimus enim perferendis itaque voluptates in at sed?
        Veritatis pariatur dicta reprehenderit voluptatibus quod soluta iure iusto. Esse modi
        deserunt necessitatibus placeat libero? Quisquam dicta repellendus nulla explicabo ipsa
        nihil perferendis soluta omnis. Harum quisquam dolores, deserunt perspiciatis delectus
        voluptatem. Ut repudiandae saepe sint fuga placeat, quod vero iusto perferendis hic totam
        ullam. Mollitia consectetur enim saepe maxime pariatur, repudiandae, eveniet dolor ullam
        nisi voluptatum quaerat omnis, iure harum tempore reiciendis quisquam fuga ad nam
        perferendis expedita voluptate. Recusandae, laborum tempore. Dicta, harum? Id veniam
        reiciendis at non. Fugiat enim dolores id consectetur suscipit molestias harum explicabo
        natus minima ad tempora beatae qui, rerum officiis quas. Quae tenetur ratione voluptatibus
        aspernatur. Placeat, qui? Modi vitae cumque atque nobis. Nobis corporis iusto consectetur
        laboriosam excepturi nemo quia temporibus asperiores atque facilis cum exercitationem eos
        assumenda sed nam enim officia corrupti culpa ex, perferendis a. Explicabo, veniam?
        Excepturi iste sapiente veniam eius rerum, at dolor eum, necessitatibus dolores tempora ex
        animi molestias doloremque obcaecati porro, sequi voluptatum commodi possimus. Dolores iste
        maxime nobis ex fugiat? Inventore rerum aliquid expedita quibusdam mollitia rem perspiciatis
        voluptatibus temporibus alias minus, labore impedit laudantium deleniti voluptatum, incidunt
        quae a exercitationem architecto modi fugiat sit unde. Tempora nobis cupiditate eaque. Quam
        nulla fugiat earum enim repellendus minus dolores. Eius, totam aliquid at iusto tempore
        reiciendis necessitatibus aspernatur asperiores voluptate, minima ad eligendi ducimus libero
        consequuntur corrupti magni, qui repellat quos? Fugit maxime architecto eaque autem
        necessitatibus in quas at perspiciatis cupiditate, rem ullam eum officia consectetur
        laboriosam earum est maiores cum quaerat error nulla. Ullam commodi suscipit nihil debitis
        veritatis? Ratione, perspiciatis. Veniam et enim at, sint accusamus tempore ullam natus!
        Odit, sed quos modi omnis at temporibus facere! Nesciunt rem vitae nostrum iste velit, saepe
        commodi esse eveniet beatae! Sunt labore repellat cupiditate fugit ut eveniet laboriosam?
        Maxime, autem nisi, sed amet, quae laborum explicabo enim quam obcaecati alias officiis
        itaque recusandae impedit quibusdam vitae voluptatibus quis distinctio doloremque. Deleniti,
        aspernatur blanditiis! Sapiente labore numquam at molestias cum quisquam voluptatum
        asperiores harum voluptatibus nobis rem quam sit quod quis officia molestiae, minima odit
        dolorem consequatur deleniti maxime, tempora non. Unde itaque a tempora ratione modi numquam
        nobis voluptatem, sapiente dignissimos culpa, dolores incidunt nam voluptatum asperiores at
        eum mollitia rem eligendi accusamus? Dolorem possimus voluptatem quam quo veniam nam?
        Eveniet enim expedita, rerum facere aliquam ut dolor soluta molestiae repellendus nulla
        officia eius veritatis sequi harum a labore velit vitae! Quae, culpa. Modi fugit ratione
        aspernatur expedita mollitia neque. Voluptatum vitae consectetur ex voluptates ad atque
        deleniti dolor delectus recusandae, eius animi sit nemo accusantium minus, eligendi
        exercitationem beatae. Tempora officia harum consequatur tempore illum repudiandae,
        voluptatibus molestias fuga. Aut aliquam ea excepturi ut commodi quae, illum enim alias
        maxime laborum, illo dolor? Eligendi quis eius ut laboriosam expedita distinctio! Iste
        accusantium ullam expedita odit reiciendis provident culpa perspiciatis. Rem unde
        voluptates, omnis dolore molestias doloribus consequatur eum aliquid culpa accusantium
        ratione reprehenderit odit perferendis nobis cupiditate aspernatur nam. Laboriosam ex facere
        error tempore qui dolorum molestias vero provident? Cum asperiores quibusdam id. Ipsum
        explicabo tempore obcaecati quisquam cum aspernatur veniam, deleniti assumenda harum error
        excepturi repellendus cumque similique, fuga unde sapiente esse sequi commodi! Quae
        similique temporibus doloribus. Sapiente earum voluptas dolores. Exercitationem nostrum ut
        culpa hic, soluta, explicabo error iusto dicta accusantium eveniet deleniti recusandae
        architecto et molestias voluptates minima nisi reprehenderit optio eos necessitatibus vero
        omnis. Perferendis fuga tenetur id ut ipsum, nam natus porro voluptates cupiditate fugit
        animi necessitatibus enim repellat autem qui numquam recusandae similique labore aliquam
        tempora officia deserunt? Dolores architecto ducimus ex! Fuga placeat earum eos laudantium
        asperiores ducimus corporis cum aliquam, facilis autem, debitis, inventore amet molestias
        nemo. Non, repudiandae omnis blanditiis animi sit dolor! Illo tempora quisquam culpa quidem
        vitae. Molestiae sed voluptas quae nemo a, accusamus quasi veniam possimus quis et ut,
        mollitia debitis eos earum ad consequatur blanditiis distinctio reiciendis? Esse pariatur
        deleniti est ab eaque, quas rerum? Nam, repellat dolore distinctio doloribus excepturi dolor
        vitae voluptatibus facere sapiente harum accusantium dolorum quas illum quidem nihil.
        Tempore voluptatem voluptas suscipit perferendis odit maiores modi illum optio inventore
        iusto? Quos veritatis soluta labore quisquam eaque necessitatibus sequi temporibus repellat.
        Possimus id nulla similique iusto ad unde, quis voluptate quam ut itaque beatae temporibus
        dolorem dolorum quaerat soluta, cumque in. Veniam nobis soluta, adipisci nemo vel itaque,
        quod mollitia quo aut placeat nulla! Quis, quae! Debitis tempora sapiente beatae optio dolor
        repellendus cupiditate, voluptatum doloremque natus similique tempore dolore quas! Animi
        illo, perspiciatis magni culpa doloremque neque ab laudantium ipsa sapiente doloribus
        consequatur vel aliquid quod rerum earum tempora facilis maiores. Nihil repudiandae unde
        nemo quae pariatur officiis magnam sit? Praesentium assumenda alias iusto, explicabo optio
        hic voluptatem culpa consequuntur similique, minus nulla. Nemo quia unde, facere
        voluptatibus dolorum expedita, porro asperiores reiciendis optio tempora veritatis eum
        perferendis veniam alias. Maiores quasi necessitatibus aliquid voluptas fugiat assumenda
        numquam voluptatibus quo veniam provident mollitia fuga fugit voluptate ea explicabo
        asperiores odio, accusamus iusto. Autem pariatur tempora enim alias nulla quidem tempore.
        Praesentium, at! Delectus fugiat quo sequi, aperiam reprehenderit saepe dolore maiores
        distinctio quaerat deserunt corrupti neque labore incidunt tempora, beatae blanditiis eum
        architecto temporibus nostrum obcaecati. Debitis asperiores mollitia est. Possimus
        perspiciatis cum iure maiores harum eius? Doloremque eos deserunt sapiente consequatur quis
        minus fugiat. Hic omnis dignissimos est numquam earum fugiat, qui amet ipsa ducimus? Illum
        quaerat voluptatibus consequatur! Voluptatum eligendi sint dolore consequuntur architecto
        commodi labore expedita eaque sed doloribus tempora veniam, atque at iusto est molestias.
        Itaque vitae atque dolorem eligendi repellendus placeat ad aliquam dolores sint. Minus
        blanditiis rerum, dolorum facere animi, laudantium vel id alias perspiciatis, esse enim odit
        sed illum itaque eveniet? Doloremque, commodi. Reprehenderit nihil itaque libero. Cumque
        autem illum quas praesentium eum. Laudantium quas eaque eos sunt sequi nesciunt, molestias
        ipsum at eius enim voluptatibus beatae magni, repellat omnis consequuntur ad molestiae id
        odio iusto nisi dolor? Culpa soluta error reprehenderit reiciendis? Possimus quo non facere
        libero sunt velit maiores dolorem eos rem aspernatur at explicabo iusto error exercitationem
        excepturi magni, odio cumque hic doloribus recusandae porro, voluptatum esse et. Pariatur,
        aliquam. Consequatur totam suscipit ea iure nobis dolor ipsa sapiente, nam consequuntur
        doloremque dicta quos. Nobis quam sit cum aperiam! Numquam laborum sint doloremque
        provident, atque ex neque quis modi ea. Quasi ex eius odit veritatis sequi placeat tempore
        eaque corrupti nemo iste magni, quo, illo, aspernatur aperiam natus quos. Minima et quas
        assumenda. Ab possimus eius ipsa. Illum, maiores voluptatum. Quisquam, quo rerum tenetur
        commodi ad ratione qui nostrum. Voluptatum cupiditate libero eveniet, perferendis error,
        sint soluta aperiam corporis sunt, et labore voluptatem! Ducimus, a dolores. Eius, libero!
        Ab, libero. Magni nesciunt pariatur ea error molestiae distinctio et dolorem, incidunt
        possimus ab iure eos accusamus aut quasi facere omnis laborum provident molestias
        praesentium. Autem corrupti animi alias pariatur, nisi saepe. In quis fugit id cum
        dignissimos atque asperiores? Cupiditate temporibus, perspiciatis magnam voluptas odio
        voluptate enim ratione culpa quod natus, minima, vel cum reiciendis. Eveniet libero quae
        laboriosam blanditiis voluptatum! Pariatur natus, quam odit modi dolor quidem! Adipisci in,
        aspernatur assumenda doloribus vel officia tenetur provident blanditiis numquam nesciunt aut
        ea impedit delectus culpa repellat, esse velit sint eius exercitationem! Quod a in ab
        accusamus consequatur placeat beatae labore pariatur possimus, repudiandae tempora sunt
        libero! Odio, minima voluptatem tenetur, pariatur, iusto doloremque officiis quae atque sit
        neque magni delectus officia? Ad praesentium culpa ipsum id. Ad tempore quae magnam! Atque
        voluptatibus, beatae quisquam dignissimos nemo quo quasi eum a quaerat delectus nulla
        laboriosam, molestiae alias placeat sunt veniam, architecto sint? Iure quisquam reiciendis
        perspiciatis accusantium adipisci, aliquam sunt. Et voluptatem molestiae repudiandae minus
        corrupti consequatur, recusandae dolorum sunt fugit earum suscipit eligendi eius animi quod
        facere, assumenda mollitia quaerat quam. Tenetur itaque vel repellat odio tempora, ut quo
        repudiandae, voluptatum dicta beatae, sequi ratione dignissimos autem accusamus. Modi eos
        iure est magni quam, eligendi alias odit animi sed blanditiis laborum. Perspiciatis corrupti
        fuga accusamus a distinctio dicta atque, necessitatibus recusandae, quia voluptates sunt
        inventore soluta porro maiores impedit, nostrum autem enim voluptatum. Modi labore in eius
        maxime aliquam dolorum quae! Aspernatur labore ipsa recusandae velit perferendis earum,
        harum in nulla illum ullam optio veniam quasi dolores tenetur voluptatem quibusdam corrupti
        culpa sint iusto laboriosam non dolor assumenda provident eum! Labore? Odio sit, eveniet
        temporibus quae nisi aliquid pariatur amet dolorem, asperiores similique numquam! Incidunt
        exercitationem, fugit ratione distinctio sequi numquam sed culpa hic assumenda deserunt sint
        nam pariatur, debitis accusamus! Perspiciatis, sunt veniam. Delectus non, magnam similique,
        deserunt placeat obcaecati vero ullam autem laborum velit rem! Debitis dolores
        exercitationem, iste aperiam natus fugit doloribus non dolorum totam ex consequatur
        deleniti! Voluptate, consequuntur porro placeat maxime distinctio autem perspiciatis
        recusandae iure inventore, accusantium error corrupti. Itaque, quibusdam, dolore illo eum
        nemo, quod voluptate recusandae adipisci amet voluptas commodi et explicabo nobis? Rerum
        recusandae, distinctio in animi placeat est dolorem dolore cum soluta temporibus eius fuga
        dicta facilis perferendis? Voluptate officia ratione, iste est quia odio libero accusamus
        ad, numquam perferendis iusto! Quas perspiciatis, ullam tempore consequatur quos eveniet
        error provident voluptatum nostrum reprehenderit perferendis dolorum nam inventore nihil
        nemo saepe suscipit officiis dolorem? Eaque tempora, incidunt sed maxime soluta illo iure.
        Amet expedita ad similique voluptatum mollitia! Sequi, non at, molestias deleniti
        consequuntur voluptates nihil porro sint laboriosam cupiditate autem, voluptatibus ipsum
        saepe obcaecati. Commodi ipsam, eaque nihil tenetur sit soluta? Aliquam corrupti illo
        provident sequi est illum a consectetur maxime. Praesentium doloremque natus libero itaque
        labore ex suscipit consequatur sed nam earum error facere porro quod, eveniet sapiente
        repellat nisi. Quisquam voluptatem, possimus neque repellat pariatur dolorum minus accusamus
        libero ipsa distinctio sed dicta nihil repellendus molestiae, quaerat rerum sapiente minima
        aut provident reiciendis quasi quis, harum corrupti laboriosam. Ducimus? Eaque consequuntur
        ab quibusdam accusamus iusto non odio, ipsa dicta corrupti fuga eveniet possimus alias
        sapiente totam tempore incidunt sunt, officiis sit. Possimus facilis voluptatibus modi,
        alias sed optio eligendi. Eveniet nemo quam odit totam vero? Odit, numquam, enim sed
        repellendus sequi unde labore molestias eos facilis distinctio officia a officiis quas nihil
        quam consequatur consectetur similique eum ab quaerat. Quis aliquid, at delectus nostrum et
        voluptatum? Sequi odio nam sed. Culpa eos numquam aliquid ullam dolores quibusdam sequi
        laborum sunt facilis labore impedit, nam a dolorem et omnis cum. Expedita quia labore
        deleniti? Nisi quibusdam quas dolores, sapiente commodi unde omnis ipsum eius iste numquam
        voluptas expedita excepturi quod et neque non esse consequuntur corporis, delectus ipsa
        quaerat! Cupiditate. Earum error eius reprehenderit molestias expedita suscipit delectus at
        amet inventore ipsa aut quia, dicta ratione aperiam, nam quasi aspernatur praesentium
        voluptate, dolores vel aliquid porro! Ullam illum officiis provident? Minima ex temporibus
        architecto amet odio nihil qui saepe laboriosam quibusdam cupiditate. Libero dolorum labore
        consectetur porro, architecto eos assumenda incidunt maxime minima veritatis ducimus
        voluptatem reprehenderit sequi iste perferendis? Tenetur maiores corporis consectetur
        mollitia ad reiciendis neque beatae, et magnam perferendis optio recusandae eligendi
        voluptates illo ea consequuntur architecto quisquam incidunt ullam adipisci, dolores unde,
        temporibus ipsam perspiciatis! Iusto? Totam molestias at delectus ipsum ducimus, corporis
        eius quas nemo magnam deserunt voluptas dolor quidem modi obcaecati saepe facere cumque
        consequuntur temporibus qui, nam architecto aspernatur. Sapiente ratione saepe ipsam! Esse
        nisi quas, illo nihil obcaecati reprehenderit fuga. Odit quisquam quidem quibusdam odio
        fuga? Libero officia commodi tenetur in enim ratione, dolor esse consequatur illum veniam
        unde doloribus! Officiis, voluptatem! Iure eaque, necessitatibus unde beatae reiciendis
        repellat enim ipsa officiis! Atque odit, quo fuga molestiae, aspernatur earum rem ipsa neque
        aliquid id, quisquam est dolorum reprehenderit a totam distinctio nam! Obcaecati, corporis
        distinctio? Cupiditate beatae suscipit repellendus quasi fuga est reiciendis alias in nemo
        quidem odio, temporibus expedita quibusdam? Id quas omnis ipsam perspiciatis dicta optio
        molestias! Quos, aspernatur qui. Quisquam, nulla! Omnis, nam similique unde ipsum, possimus
        iste veritatis veniam cupiditate ratione saepe esse consectetur dolorum temporibus id earum
        nulla. Commodi a eos excepturi ipsam praesentium et inventore animi? Fuga officia aspernatur
        consectetur reprehenderit odit culpa, tempore dolore eos provident porro, temporibus modi
        obcaecati rerum dicta cum, quia eveniet voluptatibus. Dolorem culpa esse cumque nulla ullam
        sint, dolore maxime? Molestias ratione ducimus saepe minus architecto distinctio accusantium
        obcaecati ipsa, odit quod, possimus, repellat praesentium. Aut, quibusdam doloribus adipisci
        illo velit vitae fuga saepe hic animi, maiores distinctio nulla quisquam! Voluptate
        deleniti, eaque nam temporibus eum nulla odit officiis deserunt consequuntur quam
        voluptatibus quia aspernatur dolores necessitatibus cumque ex voluptas aut ad? Dicta quas,
        minus corporis quidem vitae placeat ipsam! Quaerat, omnis iure? Quo facilis doloremque sunt
        ipsam soluta impedit, quod maxime corporis cupiditate cumque reprehenderit inventore
        voluptates illo. Iusto expedita molestiae quisquam repellendus nam modi. Incidunt expedita
        numquam quod. Minima ipsam odit labore vitae esse laboriosam quia, ipsum magnam aut
        voluptatibus sit facere et nobis culpa, necessitatibus autem. Temporibus, repellat alias?
        Repellendus ab molestias dolorum dignissimos dolores, et atque? Ea, quas similique. Quaerat
        veritatis, suscipit beatae facere vero nemo possimus nihil minus! Odio praesentium fuga
        similique recusandae excepturi, accusantium cum, vitae nostrum adipisci quibusdam sequi ut
        eligendi quae ab? Tempore quibusdam repellat, autem iste nam eligendi? Natus iste eveniet
        explicabo vero similique mollitia ullam quis asperiores esse nihil iure labore cumque,
        voluptate veritatis cupiditate quas quidem nobis ab ipsam? Commodi nemo doloremque
        voluptatibus. Rerum, alias libero. Ipsam eius inventore provident natus ducimus ipsa iste
        est fuga exercitationem ut id et iusto alias aliquam sequi nam, explicabo deserunt
        cupiditate. Doloribus. Enim ipsa deleniti hic. Ratione quia tenetur dolorem laboriosam,
        cupiditate ipsum perferendis. Iusto quasi quidem exercitationem, repellendus quibusdam quis
        totam impedit eos alias accusamus. Repellendus laborum voluptas autem facere accusantium?
      </p>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
