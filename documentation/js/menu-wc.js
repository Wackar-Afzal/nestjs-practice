'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-practice documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' : 'data-bs-target="#xs-controllers-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' :
                                            'id="xs-controllers-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' : 'data-bs-target="#xs-injectables-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' :
                                        'id="xs-injectables-links-module-AppModule-efe40403c39fd5ecdadf05967ab88fd1b0a3d82d5e5c8e5d4ae6ba6e83442c40d2162a5720977cfa0db1d87150e042fe8eae64710e89fba657322b214c0c58ad"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' :
                                            'id="xs-controllers-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' :
                                        'id="xs-injectables-links-module-AuthModule-98dce597fc2bd40609929ccd87dd6c54ac58b53df85021e39456ef58e57203c92ea90f335686d21ab2dd1dfa2f4c1038cb3a18cc3cf24aaa07141d33317e65f9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-4a161575aa581ccaf994c8594b2c06da45930d56c36d564da6c0bdb7f684cd793d0a5741f4b2bd7062368b1ab5aae4af98ece7f2ca68903f6d63fbccf8e7c5fa"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' : 'data-bs-target="#xs-controllers-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' :
                                            'id="xs-controllers-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' : 'data-bs-target="#xs-injectables-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' :
                                        'id="xs-injectables-links-module-PostModule-b2c0f7e24a5f5b8d5bce9fb69e6e43546f0bddb73fff5f350ae4e31ab27a29286b63e0a7efd47d80f3802e147ff9aa390c93cdd6402d40357fb294331fa37814"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' :
                                            'id="xs-controllers-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' : 'data-bs-target="#xs-injectables-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' :
                                        'id="xs-injectables-links-module-TagsModule-bf77e208dbd20b9b63e67ef757f682b84b63c670607cf3c2a951a70d38897ae368b184633377b7d31258edfc580b3c36561780b50e2f9723e76fb6243229595b"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' :
                                            'id="xs-controllers-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' :
                                        'id="xs-injectables-links-module-UsersModule-20abffb8145d719c0bb6da8819c15d6f6ceb90591997ee5604abcf8cbc4b71f862a69248150b82590cf91d913d5b0d5242a148c3333f6f27fe0d2dd0f7099bd9"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaOption.html" data-type="entity-link" >MetaOption</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Tag.html" data-type="entity-link" >Tag</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateMetaOptionDto.html" data-type="entity-link" >CreateMetaOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDtO.html" data-type="entity-link" >CreateUserDtO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetPostParamDto.html" data-type="entity-link" >GetPostParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamsDto.html" data-type="entity-link" >GetUserParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginAuthDto.html" data-type="entity-link" >LoginAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionService.html" data-type="entity-link" >MetaOptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});