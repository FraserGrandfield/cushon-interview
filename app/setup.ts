import { Fund } from "~/api";

const mockFund1: Fund = {
    id: "8779ddf9-101b-444d-8f72-972aab200741",
    charges: 0.09,
    label: "Cushon Equities Fund",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et risus pretium, porta lacus sed, suscipit nisl. Aliquam ultricies sollicitudin erat sed dapibus. Aliquam at libero sit amet justo congue dapibus ac eu augue. Morbi at posuere velit. Nam ut felis eu eros ullamcorper volutpat sagittis ultricies odio. Phasellus quis tincidunt justo, a congue mauris. Suspendisse nec finibus elit. Etiam pretium velit ac sapien bibendum, sollicitudin pretium libero consequat. Donec et lorem et tortor pretium elementum. Cras in tincidunt felis. Aliquam a mauris ut nibh tristique semper. Pellentesque sagittis metus non quam varius, ac sodales massa viverra.",
    riskLeveLevel: 2,
    portfolioDescription: "Nullam sollicitudin purus elit, eget vestibulum ex congue cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget nisi risus. Nunc ut ultricies magna. Integer interdum nibh ex, at congue lorem tempor sed. Nunc sollicitudin, neque ac varius condimentum, ipsum velit ornare diam, eu finibus mauris purus non est. Suspendisse non maximus ipsum. Morbi imperdiet, tortor ut aliquam pulvinar, ligula augue tincidunt metus, eu rutrum justo tortor condimentum sapien. Suspendisse tincidunt, nibh ut ornare pretium, urna augue fringilla sapien, a pellentesque turpis velit in dolor. Sed ut convallis purus.",
    portfolio: [
        {
            name: "Example 1",
            percentage: 0.8,
            about: "Cras in tincidunt felis. Aliquam a mauris ut nibh tristique semper. Pellentesque sagittis metus non quam varius, ac sodales massa viverra."
        },
        {
            name: "Example 2",
            percentage: 0.1,
            about: "Praesent commodo massa in auctor hendrerit. Suspendisse nec consequat purus. Sed sit amet massa ac velit pellentesque euismod ut vel elit. Aliquam scelerisque, diam at dictum placerat, magna diam interdum est, sit amet suscipit eros odio eget neque."
        },
        {
            name: "Example 3",
            percentage: 0.1,
            about: "Suspendisse non maximus ipsum. Morbi imperdiet, tortor ut aliquam pulvinar, ligula augue tincidunt metus, eu rutrum justo tortor condimentum sapien. Suspendisse tincidunt, nibh ut ornare pretium, urna augue fringilla sapien, a pellentesque turpis velit in dolor. Sed ut convallis purus."
        }
    ],
    expectedPercentageIncrease: {
        mostLikely: 0.004,
        good: 0.0056,
        bad: 0.0035
    }
}

const mockFund2: Fund = {
    id: "71a9ad34-8ceb-4949-a1b7-c28a16474fc8",
    charges: 0.09,
    label: "Cushon Ethical Fund",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et risus pretium, porta lacus sed, suscipit nisl. Aliquam ultricies sollicitudin erat sed dapibus. Aliquam at libero sit amet justo congue dapibus ac eu augue. Morbi at posuere velit. Nam ut felis eu eros ullamcorper volutpat sagittis ultricies odio. Phasellus quis tincidunt justo, a congue mauris. Suspendisse nec finibus elit. Etiam pretium velit ac sapien bibendum, sollicitudin pretium libero consequat. Donec et lorem et tortor pretium elementum. Cras in tincidunt felis. Aliquam a mauris ut nibh tristique semper. Pellentesque sagittis metus non quam varius, ac sodales massa viverra.",
    riskLeveLevel: 1,
    portfolioDescription: "Nullam sollicitudin purus elit, eget vestibulum ex congue cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget nisi risus. Nunc ut ultricies magna. Integer interdum nibh ex, at congue lorem tempor sed. Nunc sollicitudin, neque ac varius condimentum, ipsum velit ornare diam, eu finibus mauris purus non est. Suspendisse non maximus ipsum. Morbi imperdiet, tortor ut aliquam pulvinar, ligula augue tincidunt metus, eu rutrum justo tortor condimentum sapien. Suspendisse tincidunt, nibh ut ornare pretium, urna augue fringilla sapien, a pellentesque turpis velit in dolor. Sed ut convallis purus.",
    portfolio: [
        {
            name: "Example 1",
            percentage: 0.3,
            about: "Cras in tincidunt felis. Aliquam a mauris ut nibh tristique semper. Pellentesque sagittis metus non quam varius, ac sodales massa viverra."
        },
        {
            name: "Example 2",
            percentage: 0.5,
            about: "Praesent commodo massa in auctor hendrerit. Suspendisse nec consequat purus. Sed sit amet massa ac velit pellentesque euismod ut vel elit. Aliquam scelerisque, diam at dictum placerat, magna diam interdum est, sit amet suscipit eros odio eget neque."
        },
        {
            name: "Example 3",
            percentage: 0.2,
            about: "Suspendisse non maximus ipsum. Morbi imperdiet, tortor ut aliquam pulvinar, ligula augue tincidunt metus, eu rutrum justo tortor condimentum sapien. Suspendisse tincidunt, nibh ut ornare pretium, urna augue fringilla sapien, a pellentesque turpis velit in dolor. Sed ut convallis purus."
        }
    ],
    expectedPercentageIncrease: {
        mostLikely: 0.005,
        good: 0.0065,
        bad: 0.003
    }
}

export function setup() {
    new Promise((resolve) => {
        const request = indexedDB.open("cushon");
        request.onupgradeneeded = () => {
            let db = request.result;
            if (!db.objectStoreNames.contains("funds")) {
                db.createObjectStore("funds", { keyPath: 'id' });
            }
        };
        request.onsuccess = () => {
            resolve(true);
        } 
    }).then(() => addMockFund());
}

function addMockFund() {
    const request = indexedDB.open("cushon");
    request.onsuccess = () => {
        let db = request.result;
        db.transaction('funds', 'readwrite')
        .objectStore('funds')
        .add(mockFund1);
        db.transaction('funds', 'readwrite')
        .objectStore('funds')
        .add(mockFund2);
    }
}