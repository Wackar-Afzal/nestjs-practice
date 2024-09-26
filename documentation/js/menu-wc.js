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
                                            'data-bs-target="#controllers-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' : 'data-bs-target="#xs-controllers-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' :
                                            'id="xs-controllers-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' : 'data-bs-target="#xs-injectables-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' :
                                        'id="xs-injectables-links-module-AppModule-27bad9ea2b413546d6a4dc91dc78bf6e585f7dd983fb6fbab80d8ddcd6e335b8384c1104e9584c0e311249e6f8baeeacbde95250663caaf54147afb2f6ed9902"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' :
                                            'id="xs-controllers-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' :
                                        'id="xs-injectables-links-module-AuthModule-91445c1642dba4e260400de336f7370daa661616bb741f4faae7375f822924a4d2c26e940beefd49bd87fd11935915df6f2ede2041c54c41106ece4a6493e796"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' : 'data-bs-target="#xs-controllers-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' :
                                            'id="xs-controllers-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' : 'data-bs-target="#xs-injectables-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' :
                                        'id="xs-injectables-links-module-PostModule-7b7dfdd59bc3e0aa1d5f979690bc506d899c86754ceeb6e1d241f9869faaa8d33977a7fc8e7a9737273432a5072b7068d4ec8c76527b79aad05a459f02afea3a"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' :
                                            'id="xs-controllers-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' :
                                        'id="xs-injectables-links-module-UsersModule-2a4ed20b7a55407774dd2ccd1fb585bb5291ace7c56bf14697f22e5db27f10bd23d80b897a1a50e8f45333ad27c6059a0000dbbfcf25904e1b9a738fd90b6ed5"' }>
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
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
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
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
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